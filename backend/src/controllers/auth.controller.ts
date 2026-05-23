import type { Request, Response } from 'express'
import prisma from '../lib/prisma.js'
import { loginSchema } from '../schemas/auth.schema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ZodError } from 'zod'
import { z } from 'zod'

const registerSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { username, password } = registerSchema.parse(req.body)

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword
      }
    })

    res.status(200).json({
      message: 'Create admin already',
      admin
    })

  } catch (error) {

    if (error instanceof ZodError) {
      return res.status(400).json({
        message: 'Bad Request'
      })
    }

    return res.status(500).json({
      message: 'Server Error'
    })
  }
}


export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const result = loginSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({ message: "Validate Error" })
        }

        const { username, password } = result.data

        const user = await prisma.admin.findFirst({
            where: { username }
        })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        const token = jwt.sign(
            { username: user.username, password: user.password },
            process.env.JWT_SECRET!,
            { expiresIn: '3d' }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 3 * 24 * 60 * 60 * 1000
        })


        res.status(200).json({
            message: 'login successfully',
            user: user.username,
            password: user.password
        })
    } catch (error) {
        if (error instanceof ZodError) {

            return res.status(400).json({ message: "Invalid input" })
        }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const logoutAdmin = async (req: Request, res: Response) => {
    res.clearCookie('token')
    res.status(200).json({message: 'Logout successfully'})
} 