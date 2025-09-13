# CareConnect - Comprehensive Health & Family Care Management Platform

<div align="center">

![CareConnect Logo](src/app/favicon.ico)

**A modern, AI-powered health and family care management platform built with Next.js 15, TypeScript, and cutting-edge technologies.**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-8.16.3-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 🌟 Overview

CareConnect is a comprehensive health and family care management platform designed to help families monitor, track, and manage health-related activities for elderly family members. Built with modern web technologies and powered by AI, it provides a centralized hub for health monitoring, medication management, emergency preparedness, and family coordination.

### 🎯 Key Objectives
- **Health Monitoring**: Real-time health metrics tracking with AI-powered anomaly detection
- **Medication Management**: Comprehensive medication tracking with reminders and scheduling
- **Emergency Preparedness**: Quick access to emergency contacts and nearby medical facilities
- **Family Coordination**: Multi-user support with role-based access control
- **Document Management**: Secure storage and organization of medical records
- **Smart Alerts**: Weather-based health alerts and medication reminders

---

## 📸 Screenshots

<div align="center">

### 🏠 **Dashboard Overview**
![Dashboard](docs/screenshots/dashboard.png)
*Main dashboard showing health overview, medication reminders, and quick access to all features*

### 🏥 **Health Monitoring**
![Health Monitoring](docs/screenshots/health-monitoring.png)
*AI-powered health data analysis with anomaly detection and trend visualization*

### 💊 **Medication Tracker**
![Medication Tracker](docs/screenshots/medication-tracker.png)
*Comprehensive medication management with reminders and intake tracking*

### 🚨 **Emergency System**
![Emergency System](docs/screenshots/emergency-system.png)
*Quick access to emergency contacts, nearby hospitals, and emergency calling*

### 📄 **Document Vault**
![Document Vault](docs/screenshots/document-vault.png)
*Secure document storage and management with OCR capabilities*

### 🌤️ **Weather Alerts**
![Weather Alerts](docs/screenshots/weather-alerts.png)
*Location-based weather information with health-related smart alerts*

### 📰 **News Integration**
![News Integration](docs/screenshots/news-integration.png)
*Real-time news aggregation from multiple trusted sources*

### 💬 **CareChat**
![CareChat](docs/screenshots/carechat.png)
*AI-powered health assistant and family communication hub*



</div>

---

## ✨ Features

### 🏥 **Health Monitoring System**
- **Real-time Health Metrics**: Track blood pressure, heart rate, and other vital signs
- **AI-Powered Anomaly Detection**: Advanced AI analysis to detect health anomalies and provide warnings
- **Health Trends Visualization**: Interactive charts and graphs showing health data over time
- **Health Q&A Assistant**: AI-powered health question answering with medical disclaimers
- **Data Export**: Export health data for medical consultations

### 💊 **Medication Tracker**
- **Medication Management**: Add, edit, and track medications with detailed information
- **Smart Reminders**: Automated medication reminders with customizable scheduling
- **Dosage Tracking**: Track medication intake and missed doses
- **Medication History**: Complete history of medication usage and adherence
- **Refill Alerts**: Notifications for medication refills and renewals

### 🚨 **Emergency System**
- **Emergency Call Button**: One-click emergency calling (911)
- **Emergency Contacts**: Manage emergency contacts with quick access
- **Nearby Hospitals**: Find and locate nearby medical facilities using Google Maps
- **Custom Emergency Contacts**: Add family members and healthcare providers
- **Emergency Information**: Quick access to critical health information

### 👨‍👩‍👧‍👦 **Family Network**
- **Family Member Management**: Add and manage family members with roles
- **Role-Based Access**: Different access levels for different family members
- **Family Coordination**: Shared access to health information and care plans
- **Caregiver Support**: Tools for family caregivers to manage care

### 📄 **Document Vault**
- **Secure Document Storage**: Upload and store medical records securely
- **Document Organization**: Categorize documents by type and importance
- **Search & Filter**: Find documents quickly with advanced search
- **Document Sharing**: Share documents with family members and healthcare providers
- **OCR Integration**: Extract text from scanned documents

### 🌤️ **Weather Alerts**
- **Location-Based Weather**: Real-time weather information for your location
- **Health-Related Alerts**: Smart alerts for weather conditions that may affect health
- **Weather Trends**: Track weather patterns and their impact on health
- **Customizable Alerts**: Set up personalized weather-based health alerts

### 📰 **News Integration**
- **Multi-Source News**: Aggregated news from BBC, NDTV, and The Guardian
- **Automated Updates**: Daily news updates with intelligent categorization
- **Health-Related News**: Filter news relevant to health and medical topics
- **Real-time Updates**: Manual refresh capability for latest news

### 💬 **CareChat & Social Features**
- **AI-Powered Chat**: Intelligent chat assistant for health-related questions
- **Family Communication**: Internal messaging system for family members
- **Care Coordination**: Share updates and coordinate care activities
- **Health Tips**: AI-generated health tips and recommendations

### 🛒 **Shopping Lists**
- **Medication Shopping**: Track medication purchases and refills
- **Health Supplies**: Manage health-related shopping lists
- **Family Coordination**: Shared shopping lists for family members
- **Reminder Integration**: Shopping reminders based on medication needs

### 📅 **Calendar Integration**
- **Health Appointments**: Schedule and track medical appointments
- **Medication Schedules**: Visual calendar view of medication schedules
- **Family Events**: Coordinate family health-related events
- **Reminder System**: Integrated reminders for all health activities

---

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15.3.3** - React framework with App Router
- **TypeScript 5.0** - Type-safe JavaScript
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL 8.16.3** - Primary database
- **NextAuth.js 4.24.11** - Authentication system
- **bcryptjs** - Password hashing
- **Node-cron** - Task scheduling

### **AI & Machine Learning**
- **Google Genkit** - AI framework
- **Google AI** - AI model integration
- **Custom AI Flows** - Health anomaly detection and Q&A

### **External Services**
- **Google Maps API** - Location services
- **Weather API** - Weather data integration
- **News Scraping** - Automated news aggregation
- **Email Services** - Notification system

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

---

## 🚀 Installation

### Prerequisites
- Node.js 18.0 or higher
- PostgreSQL 12 or higher
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/careconnect.git
cd careconnect
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/careconnect"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google AI (for AI features)
GOOGLE_AI_API_KEY="your-google-ai-api-key"

# Google Maps (for location services)
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# Weather API
WEATHER_API_KEY="your-weather-api-key"

# Email (for notifications)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

### 4. Database Setup
```bash
# Create PostgreSQL database
createdb careconnect

# Run database migrations (if available)
npm run db:migrate
```

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

---

## 📖 Usage

### Getting Started

1. **Initial Setup**: Visit the landing page to create an account or sign in
2. **Dashboard**: Access the main dashboard to view health overview and quick actions
3. **Family Setup**: Add family members and assign roles for access control
4. **Health Monitoring**: Start tracking health metrics and set up AI monitoring
5. **Medication Management**: Add medications and set up reminder schedules
6. **Emergency Setup**: Configure emergency contacts and nearby facilities

### Key Workflows

#### Health Monitoring
1. Navigate to **Health Monitoring** from the sidebar
2. Input health metrics (blood pressure, heart rate, etc.)
3. AI system analyzes data for anomalies
4. View trends and receive health insights
5. Export data for medical consultations

#### Medication Management
1. Go to **Medication Tracker**
2. Add medications with dosage and frequency
3. Set up reminder schedules
4. Track daily medication intake
5. Receive alerts for missed doses

#### Emergency Preparedness
1. Access **Emergency System**
2. Add emergency contacts
3. Configure nearby hospitals
4. Test emergency call functionality
5. Share emergency information with family

---

## 🔌 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Health Monitoring
- `GET /api/health/readings` - Get health readings
- `POST /api/health/readings` - Add new health reading
- `POST /api/health/analyze` - AI health analysis
- `POST /api/health/ask` - Health Q&A

### Medication Management
- `GET /api/medications` - Get medications
- `POST /api/medications` - Add medication
- `PUT /api/medications/[id]` - Update medication
- `DELETE /api/medications/[id]` - Delete medication
- `POST /api/medications/reminders/generate` - Generate reminders

### Emergency System
- `GET /api/emergency/contacts` - Get emergency contacts
- `POST /api/emergency/contacts` - Add emergency contact
- `PUT /api/emergency/contacts/[id]` - Update contact
- `DELETE /api/emergency/contacts/[id]` - Delete contact

### Document Vault
- `GET /api/vault/docs` - Get documents
- `POST /api/vault/docs` - Upload document
- `GET /api/vault/docs/[id]` - Download document
- `DELETE /api/vault/docs/[id]` - Delete document

### News System
- `GET /api/news` - Get news articles
- `POST /api/news/scrape` - Trigger news scraping

---

## 🎨 Design System

### Color Palette
- **Primary**: Soft, muted blue (#A0D2EB) - Evokes calmness and trust
- **Background**: Very light, desaturated blue (#F0F8FF) - Gentle backdrop
- **Accent**: Muted violet (#B19CD9) - Interactive elements
- **Text**: Dark gray for readability

### Typography
- **Headlines**: PT Sans, sans-serif - Modern and approachable
- **Body Text**: PT Sans, sans-serif - Readable for all ages
- **Code**: Source Code Pro - Monospaced for technical content

### UI Components
- **Cards**: Clean, shadowed containers for content organization
- **Buttons**: Consistent styling with hover states
- **Forms**: Accessible form controls with validation
- **Icons**: Lucide React icons for consistency

---

## 🔒 Security Features

- **Authentication**: Secure user authentication with NextAuth.js
- **Password Hashing**: bcryptjs for secure password storage
- **Role-Based Access**: Granular permissions for different user types
- **Data Encryption**: Sensitive data encrypted in transit and at rest
- **Input Validation**: Comprehensive input validation with Zod
- **SQL Injection Protection**: Parameterized queries prevent SQL injection
- **CORS Configuration**: Proper CORS settings for API security

---

## 📱 Responsive Design

CareConnect is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with collapsible sidebar
- **Mobile**: Touch-friendly interface with bottom navigation
- **Accessibility**: WCAG 2.1 AA compliant design

---

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- Unit tests for components and utilities
- Integration tests for API endpoints
- End-to-end tests for critical user flows
- Accessibility testing for UI components

---

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure all required environment variables are set in your production environment:
- Database connection string
- Authentication secrets
- API keys for external services
- Email configuration

### Recommended Hosting Platforms
- **Vercel** - Optimized for Next.js applications
- **Railway** - Easy PostgreSQL integration
- **DigitalOcean** - Full control with App Platform
- **AWS** - Enterprise-grade hosting

---

## 🤝 Contributing

We welcome contributions to CareConnect! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment tools
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Google AI** - For AI capabilities and health analysis
- **Open Source Community** - For the amazing tools and libraries

---

## 📞 Support

For support, questions, or feature requests:

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/careconnect/issues)
- **Email**: support@careconnect.app
- **Documentation**: [Full documentation](https://docs.careconnect.app)

---

<div align="center">

**Built with ❤️ for better health and family care**

[Website](https://careconnect.app) • [Documentation](https://docs.careconnect.app) • [Support](https://github.com/yourusername/careconnect/issues)

</div>
