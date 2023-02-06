import "./App.css";
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from "./components/common/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Membership from "./components/membership/Membership";
import Profile from "./components/profile/Profile";
import Giftwallet from './components/giftwallet/Giftwallet';
import Newtork from './components/netwok/Network';
import Transaction from './components/transcation/Transaction';
import RanksRewards from './components/rankandrewards/RanksAndRewards';
import Download from './components/download/Download';
import Signup from './components/signup/Signup'
import Login from './components/login2/login'
import BonuSes from "./components/bonuses/BonuSes";
import Wallet from "./components/wallet/Wallet";
import Support  from "./components/support/Support";
import Sidebar from "./components/common/Sidebar";
function App() {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={< Signup/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/giftwallet" element={<Giftwallet />} />
            <Route path="/network" element={<Newtork />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/ranks&rewards" element={<RanksRewards />} />
            <Route path="/download" element={<Download />} />
            <Route path="/bonuses" element={<BonuSes />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
// 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
