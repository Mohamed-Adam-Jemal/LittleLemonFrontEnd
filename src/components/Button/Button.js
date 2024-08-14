import './Button.css'

const Button = ({ width, height, label, bgColor = '#F4CE14', textColor = '#333333', textSize}) => {
    const buttonStyle = {
        width: width, 
        height: height, 
        backgroundColor: bgColor, 
        color: textColor,
        textSize: textSize
    };

    return (
        <button style={buttonStyle}>
            {label}
        </button>
    );
};

export default Button;
