import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import "./Messaging.css";

export default function Messaging() {
  const [messageType, setMessageType] = useState("email");

  return (
    <div className="messaging-page">

      <div className="messaging-header">
        <div>
          <h1>Messaging</h1>
          <p>
            Send emails and SMS messages to your employees.
          </p>
        </div>
      </div>

      <div className="messaging-layout">

        <div className="message-card">

          <div className="message-card-header">
            <h2>Create Message</h2>
            <p>
              Compose a message and choose who should receive it.
            </p>
          </div>

          <div className="message-type-selector">

            <button
              type="button"
              className={
                messageType === "email"
                  ? "type-button active"
                  : "type-button"
              }
              onClick={() => setMessageType("email")}
            >
              <Mail size={20} />
              Email
            </button>

            <button
              type="button"
              className={
                messageType === "sms"
                  ? "type-button active"
                  : "type-button"
              }
              onClick={() => setMessageType("sms")}
            >
              <MessageSquare size={20} />
              SMS
            </button>

          </div>

          <div className="form-group">
            <label htmlFor="recipients">
              Recipients
            </label>

            <select id="recipients">
              <option value="all">
                All Employees
              </option>

              <option value="active">
                Active Employees
              </option>

              <option value="hr">
                HR Department
              </option>

              <option value="finance">
                Finance Department
              </option>

              <option value="it">
                IT Department
              </option>
            </select>
          </div>

          {messageType === "email" && (
            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Enter message subject"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="8"
              placeholder={
                messageType === "email"
                  ? "Write your email message..."
                  : "Write your SMS message..."
              }
            />
          </div>

          <div className="message-actions">
            <button
              type="button"
              className="send-button"
            >
              <Send size={18} />

              Send {messageType === "email" ? "Email" : "SMS"}
            </button>
          </div>

        </div>

        <div className="messaging-info">

          <div className="info-card">
            <h3>Quick Stats</h3>

            <div className="message-stat">
              <span>Employees</span>
              <strong>207</strong>
            </div>

            <div className="message-stat">
              <span>Emails Sent</span>
              <strong>1,203</strong>
            </div>

            <div className="message-stat">
              <span>SMS Sent</span>
              <strong>486</strong>
            </div>
          </div>

          <div className="info-card">
            <h3>Messaging Tips</h3>

            <ul>
              <li>
                Choose your recipient group carefully.
              </li>

              <li>
                Keep SMS messages short and clear.
              </li>

              <li>
                Double-check your email before sending.
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}