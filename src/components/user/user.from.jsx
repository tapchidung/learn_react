import { Button, Input, notification } from "antd";
import { useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
    const [fullName, SetFullName] = useState('hoidanit');
    const [email, SetEmail] = useState('hoidanit');
    const [password, SetPassword] = useState('hoidanit');
    const [phone, SetPhone] = useState('hoidanit');

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: 'create user',
                description: 'tạo user thành công'
            })

        }

        console.log('>check ', res.data.data)

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