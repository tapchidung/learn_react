import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";


const UserForm = (props) => {
    const { loadUser } = props
    const [fullName, SetFullName] = useState('hoidanit');
    const [email, SetEmail] = useState('hoidanit');
    const [password, SetPassword] = useState('hoidanit');
    const [phone, SetPhone] = useState('hoidanit');
    const [isModalOpen, SetIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: 'create user',
                description: 'tạo user thành công'
            })
            closeModal()
            loadUser()

        }

        // console.log('>check ', res.data.data)

    }
    const closeModal = () => {
        SetIsModalOpen(false)
        SetFullName('')
        SetEmail('')
        SetPassword('')
        SetPhone('')

    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => SetIsModalOpen(false)}
                    maskClosable={false}
                    okText={'CREATE'}
                >
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
                </Modal>

                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div><strong>Table Users</strong></div>
                    <Button
                        onClick={() => SetIsModalOpen(true)}

                        type="primary"> Create User </Button>
                </div>
            </div>
        </div >
    )
}
export default UserForm;