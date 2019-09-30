import React from "react";
import {Card, Icon} from "antd";
import moment from "moment";

import "./Card.css";

const { Meta } = Card;

export const ProductCard = (props) => {
    const {fields} = props.product;
    return (
        <Card
            hoverable
            className="product-card"
            style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)" }}
            cover={
                <img
                    style={{objectFit: 'cover', height: '100%', width: '100%'}}
                    alt="example"
                    src={(fields.Images && fields.Images.length > 0) ? fields.Images[0].url : null}
                />
            }
            actions={[
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span>{moment(fields["Post Date"]).fromNow()}</span>
                    <Icon style={{position: 'absolute', right: '20px', fontSize: '22px'}} type="star" />
                </div>
            ]}
        >
            <Meta
                title={fields["Product Title"]}
                description={
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '16px', color: '#000000'}}>
                        <div><span style={{fontWeight: '600'}}>Price:</span> <b style={{color: '#1890FF'}}>${fields.MSRP ? fields.MSRP : 0.00}</b></div>
                        <div><span style={{fontWeight: '600'}}>Profit:</span> <b style={{color: '#B7BFC9'}}>${fields.Profit ? fields.Profit : 0.00}</b></div>
                    </div>
                }
            />
        </Card>
    )
};

export const EducationCard = (props) => {
    const {course} = props;
    return (
        <div className="education-card" style={{borderRadius: '4px', height: '350px', boxShadow: "0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)"}}>
            <div style={{borderBottom: '2px solid black', borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px', height: '80%'}}>
                <img src="https://images.unsplash.com/photo-1566206199489-f6604b30c0b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
            {/*<div className="label">1:30</div>*/}
            <div style={{background: '#FFFFFF', color: '#000000', padding: '15px', textAlign: 'left', fontWeight: '600', fontSize: '14px'}}>
                <div>{course.courseName}</div>
                <div style={{fontSize: '12px', color: 'darkgray', fontWeight: 'normal'}}>Stephen Grider</div>
            </div>
        </div>
    )
};