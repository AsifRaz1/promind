// 'use client';

// // Floating Chat Widget Component

// import { useState, useEffect } from 'react';
// import { Icon } from '@/icons';
// import ContactForm from './ContactForm';
// import { CHAT_WIDGET } from '@/constants/contact.constant';
// import './floatingChat.css';

// export default function FloatingChat() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Prevent body scroll when chat is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeChat = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={toggleChat}
//         className={`floating-chat-button ${isOpen ? 'active' : ''}`}
//         aria-label={CHAT_WIDGET.BUTTON_LABEL}
//         title={CHAT_WIDGET.TOOLTIP}
//       >
//         {isOpen ? (
//           <Icon name="close" size={24} />
//         ) : (
//           <Icon name="chat" size={24} />
//         )}
//       </button>

//       {/* Chat Modal */}
//       {isOpen && (
//         <>
//           {/* Overlay */}
//           <div className="floating-chat-overlay" onClick={closeChat}></div>

//           {/* Chat Window */}
//           <div className="floating-chat-window">
//             {/* <ContactForm onClose={closeChat} showTitle={true} /> */}
//           </div>
//         </>
//       )}
//     </>
//   );
// }
