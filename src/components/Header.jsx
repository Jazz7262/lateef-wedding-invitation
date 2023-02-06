import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />
            <h3>
                Begin With The Name Of Allaah, The Most Benificient And The Most
                Merciful
            </h3>
            <h4 className="mt-4">
                Under the blessings of:
                <br />
                Hazrath Abu Muhammad Muhiyuddin Shaikh Abdul Qadir Jilani
                Al-Bagdaadi, Al-Hasani, Al-Hussaini Radiyallaahu Anhu (Hazrath
                Sarkar-e-Mehboob-e-Subhaani Ghous-ul-Azam Dastagir Radiyallaahu
                Anhu),
            </h4>
            <h4 className="mt-4">
                {/* Under the spirutual patronage of: */}
                <br />
                Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                Rahamatullaahi Alaih, Adoni,
            </h4>
            <h4 className="mt-4">
                Qutub-ul-Aqtab Hazrath Shaikh Ahmed Bin Salaam Chisti, Al-Maroof
                Hazrath Shaikh Sha Vali Rahamatullaahi Alaih, Yellarthi Shareef,
            </h4>
            <h4 className="mt-4">
                Qutub-ul-Konain Hazrath Sayyid Shah Abdus Salaam Sibgatullah
                Hussaini, Al-Maroof Hazrath ShaSha Vali Rahamatullaahi Alaih,
                Yellarthi Shareef.
            </h4>
            {/* <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Maamu - Bhanja Rahamatullaahi Alaih, Bhiwandi.
            </h4> */}
            {/* <h4 className="mt-4">
                Under the Blessings of:
                <br />
                Hazrath Syed Shah Ismail Quadri, Sajjada Nasheen Dargah Niloor
                Shareef, Gulbarga Dist.
            </h4> */}
        </section>
    );
}

export default Header;
