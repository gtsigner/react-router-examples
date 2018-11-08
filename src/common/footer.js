import React from "react";

const styles = {
  dFlex: {
    display: "flex",
    listStyle: "none"
  },
  listItem: {
    marginRight: "20px"
  }
};
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="nav">
          <hr />
          <ul style={styles.dFlex}>
            <li className="list-item" style={styles.listItem}>
              <Link to="/">Home</Link>
            </li>
            <li className="list-item" style={styles.listItem}>
              <Link to="/about">About Us</Link>
            </li>
            <li className="list-item" style={styles.listItem}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
