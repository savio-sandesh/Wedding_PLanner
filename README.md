# LoverlyClone

A full-stack wedding planner web app clone using:
- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Installation
1. Clone the repo
2. Install dependencies:
   - `cd client && npm install`
   - `cd ../server && npm install`
   - `cd .. && npm install` (for root dev dependencies)

### Development
To run both client and server:
```bash
npm start
```
- Client: [http://localhost:3000](http://localhost:3000)
- Server: [http://localhost:5000](http://localhost:5000)

### Folder Structure
- `client/` - React frontend
- `server/` - Express backend

### Environment Variables
Create a `.env` file in `server/` for MongoDB connection, e.g.:
```
MONGO_URI=your_mongodb_uri
PORT=5000
```

---

## License
MIT 