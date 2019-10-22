import React from "react";
import {Button, Form, Input, Modal} from "antd";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {submitLogin} from "../actions/login.actions";

const FormItem = (props) => {
    const {name, message, placeholder, label} = props.field;
    const {getFieldDecorator} = props;
    return (
        <Form.Item label={label} colon={false}>
            {getFieldDecorator(name, {
                rules: [{ message }],
            })(
                <Input
                    placeholder={placeholder}
                    autoComplete="off"
                />,
            )}
        </Form.Item>
    )
};

class FormModal extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values);
            }
        });
    };

    render() {
        const {loading, handleClose, fields, title} = this.props;
        const FormItems = !fields ? null : fields.map((field, index) => {
            return (
                <FormItem key={index} getFieldDecorator={this.props.form.getFieldDecorator} field={field}/>
            )
        });
        return (
            <Modal
                title={title}
                visible={this.props.isOpen}
                footer={null}
                onCancel={handleClose}
            >
                <div>
                    <Form className="modal-form">
                        {FormItems}
                        <Form.Item style={{marginBottom: '0'}}>
                            <Button loading={loading} onClick={this.handleSubmit} type="submit" className="blue-button" block>
                                {!loading && <span>Submit</span> }
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        submitLogin
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        loading: state.auth.loading
    }
}

const ModalForm = Form.create({ name: 'modal_form' })(connect(mapStateToProps, mapDispatchToProps)(FormModal));

export default ModalForm;