// // Contact Info Component

// import Link from 'next/link';
// import { Icon } from '@/icons';
// import { CONTACT_INFO } from '@/constants/contact.constant';

// export default function ContactInfo() {
//   return (
//     <section className="contact-section contact-info-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <span className="contact-tagline">{CONTACT_INFO.tagline}</span>
//           <h2 className="contact-title">{CONTACT_INFO.title}</h2>
//         </div>

//         <div className="contact-methods-grid">
//           {CONTACT_INFO.methods.map((method) => (
//             <div key={method.id} className="contact-method-card">
//               <div className="contact-method-icon">
//                 <Icon name={method.icon} size={24} />
//               </div>
//               <h3 className="contact-method-label">{method.label}</h3>
//               {method.href ? (
//                 <Link href={method.href} className="contact-method-value">
//                   {method.value}
//                 </Link>
//               ) : (
//                 <p className="contact-method-value">{method.value}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
