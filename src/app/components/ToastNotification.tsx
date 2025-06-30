"use client";

import React, { useEffect, useState } from 'react';

interface ToastNotificationProps {
  message: string;
  type?: 'wicket' | 'milestone' | 'info';
  onClose?: () => void;
}

const typeStyles = {
  wicket: 'bg-red-600 text-white',
  milestone: 'bg-green-600 text-white',
  info: 'bg-blue-600 text-white',
};

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, type = 'info', onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Wait for fade-out
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-14 right-6 z-50 transition-all duration-300 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      } ${typeStyles[type]} shadow-lg rounded px-6 py-3 flex items-center gap-2`}
      role="alert"
    >
      {type === 'milestone' && (
        <span className="inline-block w-2.5 h-2.5 bg-yellow-300 rounded-full mr-2" />
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => { if (onClose) onClose(); }, 300);
        }}
        className="ml-2 p-1 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close notification"
        tabIndex={0}
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M6 14L14 6" />
        </svg>
      </button>
    </div>
  );
};

export const ToastDemo = () => {
  const [showMilestone, setShowMilestone] = useState(false);

  useEffect(() => {
    const milestoneTimer = setTimeout(() => setShowMilestone(true), 5000);
    return () => {
      clearTimeout(milestoneTimer);
    };
  }, []);

  return (
    <>
      {showMilestone && (
        <ToastNotification
          message="Milestone! Rohit Sharma scores 100 runs!"
          type="milestone"
          onClose={() => setShowMilestone(false)}
        />
      )}
    </>
  );
};

export default ToastNotification; 