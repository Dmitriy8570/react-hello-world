export function Button({ children, onClick }) {
    return (
      <button 
        style={{ padding: '10px 20px', margin: '5px' }}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }