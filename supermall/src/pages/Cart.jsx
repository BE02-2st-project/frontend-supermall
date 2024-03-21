import React, { useEffect } from "react";

function Cart() {
    useEffect(() => {
        const accessToken =
            "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYWNrZW5kMnRlYW0iLCJpYXQiOjE3MTA5OTgwODIsImV4cCI6MTcxMTYwMjg4MiwiZW1haWwiOiIxNzE3a3NvQG5hdmVyLmNvbSJ9.1YzAYa2F7V4Tif16ak1qYAek8X5Fg-40akK5SiklgF4";

        fetch("http://43.202.211.22:8080/api/cart-list", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return <div></div>;
}

export default Cart;
