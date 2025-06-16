## Getting Started

### 1. Install the dependencies:

```bash
npm i
# or
npm install
```

### 2. Add the .env:

Add an env.local file using the .env.example

### 3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Assumptions

#### 1. Data is changing frequently so most data is either fetched client-side and cached or server-rendered on demand, but never cached on the server

#### 2. Team members (persons) will not be a lot, so data is fetched all at once hence pagination was done on client-side and not server-side

## Potential Improvements

#### 1. Add an actual access token alongside a refresh token handler to handle refreshing the token (right now it's a mocked session)

#### 2. Add notifications screen to check out previous notifications

#### 3. Add tests when user input increases (right now it's just showing graphs so having tests does not make sense currently as there is no complex logic such as if there was complex middleware logic with authorization)
