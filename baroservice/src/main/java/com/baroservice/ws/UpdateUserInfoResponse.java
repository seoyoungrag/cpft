
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="UpdateUserInfoResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "updateUserInfoResult"
})
@XmlRootElement(name = "UpdateUserInfoResponse")
public class UpdateUserInfoResponse {

    @XmlElement(name = "UpdateUserInfoResult")
    protected int updateUserInfoResult;

    /**
     * updateUserInfoResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getUpdateUserInfoResult() {
        return updateUserInfoResult;
    }

    /**
     * updateUserInfoResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setUpdateUserInfoResult(int value) {
        this.updateUserInfoResult = value;
    }

}
