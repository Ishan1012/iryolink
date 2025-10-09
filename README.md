# Iryolink Project

## System Overview
**Iryolink** is a blockchain-backed health data platform designed for secure, consent-driven medical data sharing and advanced analytics. The architecture leverages cloud-native components to ensure scalability, security, and cost-effectiveness, suitable for free-tier deployments.

---

## Key Components
- **API Gateway**: Entry point for all client requests, routing traffic securely to backend services.
- **Node.js/Express Backend (Server)**: Handles authentication, file uploads, consent management, and orchestrates data processing.
- **Lambda Functions**: Serverless functions for lightweight tasks such as file validation, anonymization, and blockchain interactions.
- **MongoDB Atlas**: Stores anonymized patient data, analytics results, and access logs with encryption at rest.
- **S3 (or equivalent object storage)**: Stores uploaded medical files securely.
- **Ethereum Sepolia Testnet**: Smart contracts manage patient consent and data immutability.
- **Big Data Analytics (Databricks Community/Spark MLlib)**: Processes and analyzes health data for AI-driven predictions.
- **VPC Subnet**: Isolates core compute resources for enhanced security.
- **Compute Nodes (EC2 Workers)**: Run Spark jobs for data processing and analytics.
- **Queue**: Manages job distribution to compute nodes for scalable analytics processing.
- **Analytics Engine**: Aggregates and stores processed results for API consumption.
---

## Data Flow Summary
1. **User Authentication**: JWT-based, with roles (Patient, Doctor/Researcher, Admin).
2. **Data Upload**: Patients upload CSV/JSON files; backend validates, strips PII, hashes, and stores data.
3. **Consent Management**: Consent actions are recorded on Ethereum via smart contracts.
4. **Data Storage**: Anonymized data is stored in MongoDB/S3; hashes and consent on blockchain.
5. **Analytics Request**: Researchers request analytics; backend verifies consent, triggers Spark jobs, and returns results.
6. **Security**: All data transfers use HTTPS/TLS; no raw identifiers are stored.
---

## Deployment Plan
- **Backend**: Node.js/Express on Render or Railway (free-tier).
- **Database**: MongoDB Atlas (free-tier).
- **Blockchain**: Ethereum Sepolia Testnet via Infura/Alchemy.
- **Big Data**: Databricks Community or local Spark cluster.
---

## Implementation Roadmap
**Week 1:** 

- Set up project repo, CI/CD, and cloud accounts 
- Scaffold Node.js/Express backend 
- Implement JWT authentication and user roles
**Week 2:** 

- Develop file upload endpoint with schema validation and PII stripping 
- Integrate S3/MongoDB storage 
- Generate and store SHA-256 hashes
**Week 3:** 

- Write and deploy Ethereum smart contract for consent management 
- Integrate blockchain interactions in backend
**Week 4:** 

- Build analytics pipeline using Spark MLlib (Databricks Community) 
- Store analytics results in MongoDB
**Week 5:** 

- Implement researcher analytics request flow with consent verification 
- Add API endpoints for analytics and access logging
**Week 6:** 

- Harden security (HTTPS, encryption, audit logs) 
- Write documentation and deploy to production
---

## Next Steps
- Review suggested MongoDB schemas and smart contract code
- Implement Spark MLlib analytics pipeline
- Build and test API endpoints
---