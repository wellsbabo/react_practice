import PropTypes from "prop-types";

//css를 자바스크립트 오브젝트로 변환
import styles from "./Button.module.css"

function Button({ text }){
    return (
        <button className={styles.btn}>{text}</button>
    );
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

export default Button;