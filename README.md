# CloudCost - Cloud Resource Cost Estimator

A comprehensive cloud resource cost estimation application that helps users calculate the cost of deploying various cloud resources across different AWS regions. This application consists of a Spring Boot backend API and a React frontend interface.

## 🚀 Features

- **Multi-Resource Cost Estimation**: Calculate costs for various cloud resource types including Compute, Storage, Database, Networking, Security & Identity, and AI/ML services
- **Regional Pricing**: Support for 20+ AWS regions with region-specific pricing multipliers
- **Dynamic Resource Configuration**: Add/remove resource configurations dynamically
- **Business Requirements Integration**: Include business requirements in cost calculations
- **Real-time Cost Calculation**: Get instant cost estimates as you configure resources
- **Modern UI**: Clean, responsive React interface with cloud-themed design
- **RESTful API**: Well-structured backend API for resource and cost management

## 🏗️ Architecture

```
cloudcost/
├── cc-backend/          # Spring Boot REST API (Port 8080)
│   ├── src/main/java/   # Java source code
│   └── src/main/resources/ # Configuration and data files
└── ccfrontend/          # React Frontend Application (Port 3000/3001)
    ├── src/components/  # React components
    ├── src/utils/       # Utility functions and constants
    └── public/          # Static assets
```

## 📋 Prerequisites

### Backend Requirements
- **Java 21** or higher
- **Maven 3.6+**
- **PostgreSQL 12+** (running on port 5432)
- **Git** (for cloning the repository)

### Frontend Requirements
- **Node.js 16+** 
- **npm 8+** or **yarn**

### Database Setup
The application requires a PostgreSQL database with the following configuration:
- Database name: `resource_estimator`
- Username: `jd`
- Password: `AngelRose@2`
- Host: `localhost`
- Port: `5432`

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cloudcost
```

### 2. Database Setup
Create the PostgreSQL database:
```sql
CREATE DATABASE resource_estimator;
CREATE USER jd WITH PASSWORD 'AngelRose@2';
GRANT ALL PRIVILEGES ON DATABASE resource_estimator TO jd;
```

### 3. Start the Backend (Port 8080)

Navigate to the backend directory:
```bash
cd cc-backend
```

#### Using Maven Wrapper (Recommended)
```bash
# On Unix/Linux/macOS
./mvnw spring-boot:run

# On Windows
mvnw.cmd spring-boot:run
```

#### Using System Maven
```bash
mvn spring-boot:run
```

The backend API will start on **http://localhost:8080**

#### Backend Verification
Check if the backend is running:
```bash
curl http://localhost:8080/api/resource_type
curl http://localhost:8080/api/region
```

### 4. Start the Frontend (Port 3000)

Open a new terminal and navigate to the frontend directory:
```bash
cd ccfrontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The frontend will start on **http://localhost:3000** (or 3001 if 3000 is occupied)

#### Custom Port Configuration
To run on a specific port (e.g., 3001):
```bash
# Unix/Linux/macOS
PORT=3001 npm start

# Windows
set PORT=3001 && npm start
```

## 📡 API Endpoints

### Backend API (http://localhost:8080)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/resource_type` | Get all available resource types |
| GET | `/api/region` | Get all available regions with pricing multipliers |
| POST | `/api/estimate` | Calculate cost estimate for given resources |

### Sample API Requests

#### Get Resource Types
```bash
curl -X GET http://localhost:8080/api/resource_type
```

#### Get Regions
```bash
curl -X GET http://localhost:8080/api/region
```

#### Calculate Cost Estimate
```bash
curl -X POST http://localhost:8080/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "resources": [
      {
        "resourceType": "Compute",
        "count": 2,
        "region": "us-east-1"
      }
    ],
    "businessRequirements": "High availability setup for production workload"
  }'
```

## 🛠️ Development

### Backend Development

#### Project Structure
```
cc-backend/
├── src/main/java/com/example/cloudcost/
│   ├── CloudcostApplication.java          # Main Spring Boot application
│   ├── controller/                        # REST controllers
│   │   ├── CostEstimatorController.java   # Cost estimation endpoints
│   │   └── ResourceController.java        # Resource management endpoints
│   ├── dto/                              # Data Transfer Objects
│   │   ├── EstimateRequest.java          # Request models
│   │   └── EstimateResponse.java         # Response models
│   ├── entity/                           # JPA entities
│   │   ├── Region.java                   # Region entity
│   │   ├── ResourceType.java             # Resource type entity
│   │   └── Pricing.java                  # Pricing entity
│   ├── repository/                       # Data repositories
│   ├── service/                          # Business logic interfaces
│   └── serviceImpl/                      # Service implementations
└── src/main/resources/
    ├── application.properties            # Application configuration
    └── data.sql                         # Initial data setup
```

#### Key Technologies
- **Spring Boot 3.5.4** - Main framework
- **Spring Data JPA** - Database operations
- **PostgreSQL** - Primary database
- **Lombok** - Boilerplate code reduction
- **Maven** - Dependency management

#### Running Tests
```bash
cd cc-backend
./mvnw test
```

#### Building for Production
```bash
cd cc-backend
./mvnw clean package
java -jar target/cloudcost-0.0.1-SNAPSHOT.jar
```

### Frontend Development

#### Project Structure
```
ccfrontend/
├── src/
│   ├── components/                       # React components
│   │   ├── Header.jsx                    # Application header
│   │   ├── BackgroundDecoration.jsx     # Cloud animations
│   │   ├── ResourceConfiguration.jsx    # Resource config section
│   │   ├── ResourceRow.jsx              # Individual resource row
│   │   ├── BusinessRequirements.jsx     # Requirements input
│   │   └── CostEstimate.jsx             # Cost display
│   ├── utils/                           # Utility functions
│   │   ├── constants.js                 # Application constants
│   │   └── costCalculator.js            # Cost calculation logic
│   ├── App.jsx                          # Main application component
│   ├── App.css                          # Main styles
│   └── index.js                         # Application entry point
└── public/                              # Static assets
```

#### Key Technologies
- **React 19.1.1** - Frontend framework
- **Axios 1.11.0** - HTTP client
- **Create React App** - Build tooling
- **CSS3** - Styling with animations

#### Available Scripts
```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject from Create React App (one-way operation)
npm run eject
```

#### Building for Production
```bash
cd ccfrontend
npm run build
```

The build files will be in the `build/` directory.

## 🔧 Configuration

### Backend Configuration

Edit `cc-backend/src/main/resources/application.properties`:

```properties
# Application name
spring.application.name=cloudcost

# Database configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/resource_estimator
spring.datasource.username=jd
spring.datasource.password=AngelRose@2

# JPA/Hibernate configuration
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# Data initialization
spring.sql.init.mode=always
spring.sql.init.data-locations=classpath:data.sql
spring.jpa.defer-datasource-initialization=true
```

### Frontend Configuration

The frontend is configured to connect to the backend at `http://localhost:8080`. To change this, modify the API base URL in the components.

### Environment Variables

#### Backend
- `SPRING_DATASOURCE_URL` - Database URL
- `SPRING_DATASOURCE_USERNAME` - Database username  
- `SPRING_DATASOURCE_PASSWORD` - Database password

#### Frontend
- `PORT` - Development server port (default: 3000)
- `REACT_APP_API_BASE_URL` - Backend API URL

## 📊 Database Schema

The application uses the following main entities:

### Regions
- 20+ AWS regions with pricing multipliers
- Regions include us-east-1, us-west-2, eu-west-1, ap-south-1, etc.
- Each region has a cost multiplier (0.95 to 1.25)

### Resource Types
- **Compute** (Base price: $100)
- **Storage** (Base price: $50)  
- **Database** (Base price: $70)
- **Networking** (Base price: $40)
- **Security and Identity** (Base price: $80)
- **AI/ML** (Base price: $120)

### Resource Mapping
- Junction table mapping available resources per region
- Varying availability of resources across regions

## 🧪 Testing

### Backend Testing
```bash
cd cc-backend
./mvnw test
```

### Frontend Testing
```bash
cd ccfrontend
npm test
```

### Integration Testing
1. Start the backend on port 8080
2. Start the frontend on port 3000/3001
3. Navigate to the frontend URL
4. Test the complete flow:
   - Add resource configurations
   - Select regions and resource types
   - Enter business requirements
   - Calculate cost estimates

## 🚀 Deployment

### Backend Deployment
```bash
cd cc-backend
./mvnw clean package
java -jar target/cloudcost-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
```bash
cd ccfrontend
npm run build
# Deploy the build/ directory to your web server
```

### Docker Deployment (Optional)
Create Dockerfiles for both applications and use docker-compose for orchestration.

## 🛠️ Troubleshooting

### Common Issues

#### Backend Issues
- **Port 8080 already in use**: Kill the process using port 8080 or change the server port
- **Database connection failed**: Verify PostgreSQL is running and credentials are correct
- **Maven build fails**: Ensure Java 21+ is installed and JAVA_HOME is set

#### Frontend Issues  
- **Port 3000 in use**: The app will automatically try port 3001, or set PORT=3001
- **API connection failed**: Verify backend is running on port 8080
- **npm install fails**: Clear npm cache with `npm cache clean --force`

#### Database Issues
- **Database doesn't exist**: Create the `resource_estimator` database in PostgreSQL
- **Permission denied**: Grant proper privileges to the `jd` user
- **Connection refused**: Check if PostgreSQL service is running

### Log Locations
- **Backend logs**: Console output or `logs/` directory if configured
- **Frontend logs**: Browser console for runtime errors
- **Database logs**: PostgreSQL log directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Development Team** - Initial work

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the API documentation

## 🗺️ Roadmap

- [ ] Add more cloud providers (Azure, GCP)
- [ ] Implement user authentication
- [ ] Add cost history and tracking
- [ ] Export estimates to PDF/Excel
- [ ] Real-time pricing updates
- [ ] Advanced cost optimization suggestions
- [ ] Multi-currency support

---

**Happy Cloud Cost Estimating! ☁️💰**
