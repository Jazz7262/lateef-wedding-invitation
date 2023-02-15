import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. J Mohammed Rafeeq Sahab</h2>
                <h5 className="address mb-3">
                    Fruit Merchant, Wholesale & Retail Commission Agent,
                    <br />
                    Adoni.
                </h5>
                <h5 className="address mb-3">
                    H.No.: 6/264, NTR Colony,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94410 22323, <br />
                    +91 99632 53379, <br />
                    +91 84958 13025.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
