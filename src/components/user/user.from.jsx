import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";


const UserForm = () => {
    const [fullName, SetFullName] = useState('hoidanit');
    const [email, SetEmail] = useState('hoidanit');
    const [password, SetPassword] = useState('hoidanit');
    const [phone, SetPhone] = useState('hoidanit');

    const handleClickBtn = () => {
        const URL_Backend = 'http://localhost:8080/api/v1/user';
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_Backend, data)
        console.log({ fullName, email, password, phone })

    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { SetFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { SetEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { SetPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { SetPhone(event.target.value) }}
                    />
                </div>
                <div>
                    <Button
                        onClick={handleClickBtn}

                        type="primary"> Create User </Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;