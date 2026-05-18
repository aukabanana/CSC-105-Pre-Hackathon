# Design Guidelines

## Project Identity

This project is an IoT & Smart Home System web application for a pre-hackathon project.

The application allows admin users to manage smart home devices, monitor device status, calculate electricity charges, analyze usage data, and view system notifications.

The design should feel:
- clean
- simple
- modern
- friendly
- calm
- readable
- practical for real users
- suitable for a student pre-hackathon project

The UI should look like a real working smart home management dashboard, not a generic AI-generated landing page.

---

## Design Personality

The UI should follow a clean dashboard style with rounded containers, soft shadows, bold readable text, and clear blue-accented actions.

Preferred style:
- light dashboard interface
- large rounded navbar/header
- card-based layout
- soft shadows
- strong blue primary actions
- clear admin controls
- simple device management UI
- readable charts and tables
- minimal decoration
- practical spacing

The design should look polished but still realistic for a student-built product.

Avoid:
- generic SaaS landing page style
- excessive gradients
- glassmorphism
- neon colors
- overly futuristic cyberpunk style
- too many decorative elements
- oversized marketing hero sections
- fake marketing copy
- inconsistent spacing
- cluttered cards
- random illustrations that do not support the system

---

## Color Palette

Use this project color palette:

### Core Colors

- App background: #F2F2F7
- Surface/Card background: #FDFDFD
- Primary blue: #1A56C2
- Primary text: #1E1E1E
- Warning yellow: #EFAD07
- Success green: #27C45F
- Danger red: #EE4646
- Orange accent: #F59E0B
- Error/alert soft red: #FD736F
- Highlight yellow: #FFCA08

### Color Usage

Page background:
- Use #F2F2F7 as the main app background.
- The background should feel soft, light, and calm.

Cards and surfaces:
- Use #FDFDFD for cards, modals, tables, navbar, and major panels.
- Cards should stand out using soft shadow and rounded corners.

Primary blue:
- Use #1A56C2 for:
  - primary buttons
  - active navigation states
  - main chart accents
  - device names
  - links
  - active toggles
  - table headers
  - important dashboard numbers

Primary text:
- Use #1E1E1E for headings, labels, body text, and important content.

Warning:
- Use #EFAD07 or #F59E0B for warning states such as devices running too long.

Success:
- Use #27C45F for active, online, connected, success, or normal states.

Danger:
- Use #EE4646 or #FD736F for delete buttons, critical alerts, offline states, and destructive actions.

Yellow:
- Use #FFCA08 for light category tags, warning chips, or visual highlights.

Avoid:
- random colors outside the palette
- default browser blue
- purple-heavy chart colors unless already used for chart distinction
- using red for non-danger actions
- using too many accent colors on one screen

---

## Typography

Use simple, bold, readable typography.

Recommended style:
- modern sans-serif
- high readability
- strong headings
- clear dashboard labels
- consistent text hierarchy

Rules:
- Page titles should be bold and easy to scan.
- Card titles should be clear and medium-sized.
- Body text should be readable and not too small.
- Use bold text for important labels, device names, and numbers.
- Avoid using too many font weights.
- Avoid thin text for important dashboard information.

Suggested scale:
- Page title: 28px–36px
- Header title: 24px–32px
- Section title: 22px–28px
- Card title: 18px–24px
- Body text: 16px–20px
- Small labels: 14px–16px
- Large dashboard numbers: 40px–56px

---

## Layout System

Use a clean dashboard layout with large spacing, rounded components, and strong visual grouping.

General layout rules:
- Use a light gray app background.
- Use large white cards for main content.
- Use consistent spacing between sections.
- Keep layouts simple and easy to understand.
- Important actions should be visible and easy to access.
- Use grid layouts for dashboards and device lists.
- Use table/list layouts for calculation and notification pages.
- Avoid unnecessary full-screen decorative sections.

Recommended spacing:
- Page padding desktop: 40px
- Page padding tablet: 24px
- Page padding mobile: 16px
- Card padding: 20px–32px
- Card gap: 24px–40px
- Section gap: 32px–56px
- Border radius: 20px–32px
- Header/navbar border radius: 999px or large pill radius
- Button border radius: 10px–999px depending on context

---

## Header / Navigation

The app uses a large rounded top header.

Header should include:
- home icon button on the left
- current page title
- admin username on the right
- logout icon on the far right

Style:
- background: #FDFDFD
- rounded pill shape
- soft shadow
- strong dark title text
- large circular home icon background
- simple black icons
- generous horizontal padding

Rules:
- Header must be consistent across Dashboard, Device, Notifications, Electricity Charges, and Login pages.
- Keep the header clean and minimal.
- Page title should clearly indicate the current section.
- Admin username should be visible on authenticated pages.
- Logout icon should be easy to find.

Avoid:
- crowded navigation
- too many top-level menu items
- complex dropdowns
- changing header style between pages

---

## Main Pages

### Dashboard Page

The dashboard should show a high-level overview of the smart home system.

Recommended sections:
- top header
- feature navigation pills
- device summary card
- temperature chart card
- device category chart card
- analysis overview
- notification shortcut
- calculate shortcut

Dashboard feature pills:
- Device
- Calculate
- Analysis
- Notifications

Feature pill style:
- white card background
- rounded pill shape
- colored border
- large circular icon on the left
- bold feature title
- small subtitle
- color-coded by feature

Feature colors:
- Device: #1A56C2
- Calculate: #27C45F
- Analysis: #F59E0B
- Notifications: #EE4646

Dashboard cards:
- use large rounded white panels
- use soft shadows
- section title in a separate rounded title bar when needed
- charts should be centered and readable
- data labels should be clear

Avoid:
- making the dashboard look like a finance dashboard
- adding marketing sections
- overloading the screen with too many metrics

---

### Device Page

The device page is used to view, toggle, add, and delete smart devices.

Layout:
- top header
- back button
- Add Device button
- responsive device card grid

Device grid:
- desktop: 4 columns
- tablet: 2 columns
- mobile: 1 column

Device card style:
- white background
- rounded corners
- soft shadow
- device icon in a circular pale-blue icon container
- toggle switch at top right
- blue device name
- room/location below device name
- device details in label/value format
- blue divider line
- delete button aligned to bottom right

Device card content:
- device name
- location
- power usage
- type
- installed date
- on/off toggle
- delete action

Device name:
- use #1A56C2
- bold
- readable

Toggle:
- active state: #1A56C2
- inactive state: white/gray with blue border or muted gray
- place at top right of card
- keep visually consistent across all device cards

Delete button:
- use red/danger styling
- rounded pill
- include trash icon when possible
- only use red for destructive actions

Avoid:
- making all device cards visually too cramped
- hiding important device information
- unclear toggle states
- oversized delete buttons

---

### Notifications Page

The notifications page should show alert cards in a vertical list.

Layout:
- top header
- back button
- stacked notification cards

Notification card style:
- white background
- rounded corners
- soft shadow
- left border color indicating severity
- title at top
- status/type chips below title
- message text
- mark as read button on the right
- date below button or aligned right

Notification severity:
- warning: orange/yellow left border
- system information: blue left border
- danger/critical: red left border

Notification chips:
- small rounded pill
- warning chip uses soft yellow/orange background
- device chip uses soft blue background
- text should be bold and readable

Mark as read button:
- primary blue background
- white text
- rounded corners
- placed on right side
- consistent size across cards

Avoid:
- making notifications look like generic blog cards
- using only color without text labels
- hiding the date
- making the action button too small

---

### Electricity Charges Page

The electricity charges page should help users understand device power usage and total expense.

Layout:
- top header
- back button
- summary card
- page title
- usage table
- total expense section

Summary card:
- white rounded container
- soft shadow
- may include circular chart/gauge
- use orange/yellow for electricity cost visualization
- keep content minimal and readable

Table style:
- blue header row using #1A56C2
- white rounded rows
- soft shadows
- clear columns
- vertical dividers with light border
- enough row height for readability

Recommended table columns:
- icon
- Name
- Type
- Devices Power
- Power Usage
- Unit
- Expense

Table row style:
- device icon in soft red/pink circular background
- device name in blue
- type as yellow pill tag
- numbers aligned clearly
- expense shown with currency

Total Expense card:
- white card background
- blue section header
- grouped device types
- itemized device expenses
- subtotal
- VAT
- total
- total amount highlighted in #1A56C2

Avoid:
- dense spreadsheet-like table design
- unclear currency formatting
- too many decorative charts
- mixing unrelated analytics

---

### Login Page

The login page should be simple and centered.

Layout:
- top header with home icon and Login title
- centered login card
- username field
- password field
- primary Login button
- short helper text

Login card style:
- white background
- rounded corners
- soft shadow
- centered on page
- medium width
- generous padding

Form style:
- labels above inputs
- input icons on the left
- rounded input borders
- clear placeholder text
- enough spacing between fields

Login button:
- full width
- blue background #1A56C2
- white text
- rounded corners
- subtle shadow
- clear hover state

Avoid:
- complex login illustrations
- unnecessary marketing text
- tiny input labels
- crowded spacing

---

## Component Guidelines

### Buttons

Primary button:
- background: #1A56C2
- text: #FDFDFD
- rounded corners
- medium height
- bold label
- subtle shadow
- hover state should slightly darken or lift

Examples:
- Add Device
- Login
- Mark as read
- Save
- Submit

Secondary button:
- background: #FDFDFD
- text: #1E1E1E
- subtle border
- soft shadow
- rounded corners

Examples:
- Cancel
- Go back

Danger button:
- background: #EE4646 or soft red
- text: white or #EE4646 depending on emphasis
- used only for delete/destructive actions

Examples:
- Delete
- Confirm delete

Icon buttons:
- circular or pill shape
- clear icon
- enough clickable area
- avoid icon-only buttons if meaning is unclear

---

### Back Button

Back buttons should be consistent across pages.

Style:
- white background
- rounded pill
- soft shadow
- left arrow icon
- label: "go back"
- dark text
- placed below header on the left

Avoid:
- placing back button inconsistently
- using different label casing across pages
- making it too small

---

### Cards

Cards are the main visual structure.

Rules:
- background: #FDFDFD
- border radius: 20px–32px
- soft shadow
- generous padding
- clear hierarchy
- consistent spacing
- content should be easy to scan

Use cards for:
- dashboard charts
- device cards
- notifications
- summary sections
- login form
- electricity totals
- modals

Avoid:
- harsh borders
- dark cards
- heavy shadows
- too many nested cards
- inconsistent radius

---

### Forms

Forms should be clear and practical.

Rules:
- labels above inputs
- bold labels
- rounded input fields
- visible border
- placeholder text in muted gray
- enough vertical spacing
- primary action clearly visible

Input style:
- white or very light background
- 1px dark or gray border
- border radius around 10px–14px
- padding around 14px–20px
- font size around 16px–18px

Avoid:
- very thin input text
- unclear select dropdown state
- crowded two-column layouts on mobile
- hiding labels

---

### Modals

The add device modal should be clean, centered, and focused.

Overlay:
- dark semi-transparent background
- modal centered both vertically and horizontally

Modal card:
- background: #FDFDFD
- large rounded corners
- width suitable for desktop forms
- generous padding
- simple title and subtitle
- two-column form layout on desktop
- single-column layout on mobile

Modal content:
- title: Add Device
- subtitle: Create a new device for your smart home system
- fields:
  - Name
  - Type
  - Power Usage
  - Location
- actions:
  - Cancel
  - Add Device

Modal actions:
- aligned to bottom right on desktop
- Cancel as secondary button
- Add Device as primary blue button

Avoid:
- oversized modal
- unclear form labels
- decorative modal backgrounds
- too many fields
- hiding cancel action

---

### Tables

Use clean table-like layouts for electricity calculation pages.

Rules:
- blue table header
- white row cards
- rounded corners
- soft shadow
- clear columns
- consistent row spacing
- readable numbers
- avoid cramped data

Use light dividers between columns when needed.

Avoid:
- dense spreadsheet styling
- default HTML table look
- low contrast header text
- inconsistent row heights

---

### Charts

Charts should be simple and readable.

Recommended charts:
- donut chart for device status
- line chart for temperature
- bar chart for device categories
- circular progress/gauge for electricity or summary values

Rules:
- use project palette colors
- keep labels readable
- keep chart backgrounds clean
- avoid too many grid lines
- use chart colors with meaning

Color mapping:
- All devices: #1A56C2
- Active: #27C45F
- Inactive: #F59E0B
- Warning: #EFAD07
- Danger: #EE4646
- Temperature line: #FD736F
- Secondary chart line: blue/purple only when needed for distinction

Avoid:
- rainbow charts without meaning
- 3D chart effects
- finance-style chart widgets
- charts without labels

---

### Status Chips

Use chips to make status and type easy to scan.

Chip style:
- rounded pill
- soft background color
- bold text
- compact padding

Examples:
- warning
- Smart LED Bulb
- Light
- Active
- Inactive
- Connected

Color usage:
- warning chip: soft yellow/orange background with orange text
- device chip: soft blue background with blue text
- type chip: soft yellow background with orange/yellow text
- danger chip: soft red background with red text
- success chip: soft green background with green text

Avoid:
- using chips for long sentences
- too many chips in one card
- chips with low contrast

---

## Icon Style

Use simple, clear icons.

Recommended icons:
- home
- logout
- power
- calculator
- chart
- bell
- light bulb
- trash
- arrow left
- plus
- user
- lock

Rules:
- icons should support the label
- use filled or simple line icons consistently
- keep icon size consistent
- use circular icon backgrounds for feature cards and device cards
- use black icons in header when needed
- use blue icons for device/primary actions
- use red icons for delete
- use orange icons for warning/analysis
- use green icons for calculation/success

Avoid:
- mixing unrelated icon styles
- using overly detailed icons
- using icons without labels for important actions

---

## Interaction Rules

Interactions should be subtle and useful.

Allowed:
- button hover shadow
- card hover lift
- toggle switch animation
- modal fade/scale animation
- slight shadow change
- active tab/feature highlight
- smooth transition around 150ms–250ms

Avoid:
- bouncing animation
- excessive motion
- auto-moving elements
- distracting effects
- animation that makes the UI feel like a template demo

---

## Responsive Design

The UI must work well on desktop, tablet, and mobile.

Desktop:
- dashboard can use two-column or multi-column layout
- device page can use 4-card grid
- tables can use full-width layout
- modal can use two-column form layout

Tablet:
- reduce dashboard columns
- device grid should become 2 columns
- keep chart cards readable

Mobile:
- single-column layout
- cards stacked vertically
- modal form becomes single column
- buttons remain tappable
- header content should not overflow
- tables may become stacked cards if needed

Rules:
- do not hide important device status
- avoid horizontal scrolling
- maintain consistent spacing
- keep touch targets large enough
- keep text readable

---

## Accessibility

The interface should be easy to read and use.

Rules:
- text must have enough contrast
- buttons must have clear labels
- important states should use both color and text
- clickable areas should be large enough
- form inputs should have labels
- avoid tiny dashboard text
- do not rely only on icons for important actions
- danger actions must be visually distinct

---

## Admin UI Rules

This project is admin-oriented.

Admin UI should include:
- visible admin username
- logout action
- add device action
- delete device action
- mark notification as read action
- electricity calculation results

Rules:
- admin controls should be clear
- destructive actions must use danger styling
- normal controls should not look dangerous
- avoid showing too many admin actions in one small area
- keep admin experience practical and direct

---

## AI Design Rules

When using AI tools such as Stitch or code-generation assistants:

- Follow this Design.md before creating or modifying UI.
- Keep the UI close to the attached visual direction.
- Preserve the light gray background, white cards, blue primary actions, rounded corners, and soft shadows.
- Do not redesign the whole project unless explicitly requested.
- Do not create a generic landing page.
- Do not add pricing, testimonials, marketing sections, or unrelated SaaS content.
- Do not add random gradients or glassmorphism.
- Do not introduce unrelated visual styles.
- Do not create finance/payment widgets.
- Focus on smart home device management, electricity calculation, analysis, and notifications.
- Keep changes small, consistent, and aligned with existing screens.

---

## Existing UI Consistency

When modifying existing pages or components:

- Follow the current project structure.
- Reuse existing components when possible.
- Keep the same visual language as the existing screenshots.
- Keep the large rounded header style.
- Keep the soft card shadows.
- Keep #1A56C2 as the main action color.
- Keep device cards, notification cards, forms, and tables visually consistent.
- Do not change unrelated pages.
- Improve only the part requested unless told otherwise.
- Keep class names and layout patterns consistent when possible.

---

## Final Design Principle

Make the interface look like a real IoT & Smart Home admin dashboard.

The design should be clean, readable, rounded, calm, and presentation-ready for a pre-hackathon project.

Do not over-design.
Do not make it look like a generic AI-generated template.
Focus on clear device management, electricity usage, analysis, and notifications.