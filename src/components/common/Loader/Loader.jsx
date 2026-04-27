// Reusable Loading Spinner Component

import { Icon } from '@/icons';
import { LOADING_MSG } from '@/constants/error.constant';
import './loader.css';

export default function Loader({ 
  text = LOADING_MSG.DEFAULT, 
  size = 48,
  fullPage = false 
}) {
  const containerClass = fullPage ? 'loading-container' : 'loading-inline';

  return (
    <div className={containerClass}>
      <div className="loading-content">
        {/* Spinning Loader */}
        <div className="loading-spinner">
          <Icon name="loading" size={size} className="loading-icon" />
        </div>

        {/* Loading Text */}
        {text && <p className="loading-text">{text}</p>}
      </div>
    </div>
  );
}
