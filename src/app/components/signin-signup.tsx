import React, { useState } from "react";

// Simple Navbar with Sign In and Sign Up buttons
const Navbar: React.FC<{ onSignIn: () => void; onSignUp: () => void }> = ({
    onSignIn,
    onSignUp,
}) => (
    <nav style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", padding: "1rem" }}>
        <button onClick={onSignIn}>Sign In</button>
        <button onClick={onSignUp}>Sign Up</button>
    </nav>
);

// Sign In Form
const SignInForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign in logic here
        alert(`Sign In: ${email}`);
        onClose();
    };
    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Sign In</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Sign In</button>
            <button type="button" onClick={onClose} style={buttonStyle}>Cancel</button>
        </form>
    );
};

// Sign Up Form
const SignUpForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }
        // Handle sign up logic here
        alert(`Sign Up: ${email}`);
        onClose();
    };
    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirm}
                required
                onChange={e => setConfirm(e.target.value)}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Sign Up</button>
            <button type="button" onClick={onClose} style={buttonStyle}>Cancel</button>
        </form>
    );
};

// Main Component
const SignInSignUp: React.FC = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <div>
            <Navbar
                onSignIn={() => { setShowSignIn(true); setShowSignUp(false); }}
                onSignUp={() => { setShowSignUp(true); setShowSignIn(false); }}
            />
            {showSignIn && <Modal><SignInForm onClose={() => setShowSignIn(false)} /></Modal>}
            {showSignUp && <Modal><SignUpForm onClose={() => setShowSignUp(false)} /></Modal>}
        </div>
    );
};

// Simple Modal implementation
const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>{children}</div>
    </div>
);

// Styles
const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    minWidth: "250px",
};

const inputStyle: React.CSSProperties = {
    padding: "0.5rem",
    fontSize: "1rem",
};

const buttonStyle: React.CSSProperties = {
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "0.5rem",
};

const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

export default SignInSignUp;