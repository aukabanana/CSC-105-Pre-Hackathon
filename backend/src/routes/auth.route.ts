import Router from 'express'
import * as controller from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', controller.registerAdmin)
router.post('/login', controller.loginAdmin)
router.post('/logout', controller.logoutAdmin)

export default router