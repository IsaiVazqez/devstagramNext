const AuthButton = ({ platform, onClick, bgColor, hoverColor }) => {
    return (
    <div>
      <button 
        onClick={onClick} 
        className={`mx-2 p-2 rounded text-white ${bgColor} hover:${hoverColor}`}
      >
        Iniciar sesión con {platform}
      </button>
      </div>
    );
  };
  
export default AuthButton;