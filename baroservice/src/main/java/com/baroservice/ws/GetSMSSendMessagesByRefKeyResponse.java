
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
 *         &lt;element name="GetSMSSendMessagesByRefKeyResult" type="{http://ws.baroservice.com/}ArrayOfSMSMessage" minOccurs="0"/&gt;
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
    "getSMSSendMessagesByRefKeyResult"
})
@XmlRootElement(name = "GetSMSSendMessagesByRefKeyResponse")
public class GetSMSSendMessagesByRefKeyResponse {

    @XmlElement(name = "GetSMSSendMessagesByRefKeyResult")
    protected ArrayOfSMSMessage getSMSSendMessagesByRefKeyResult;

    /**
     * getSMSSendMessagesByRefKeyResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfSMSMessage }
     *     
     */
    public ArrayOfSMSMessage getGetSMSSendMessagesByRefKeyResult() {
        return getSMSSendMessagesByRefKeyResult;
    }

    /**
     * getSMSSendMessagesByRefKeyResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfSMSMessage }
     *     
     */
    public void setGetSMSSendMessagesByRefKeyResult(ArrayOfSMSMessage value) {
        this.getSMSSendMessagesByRefKeyResult = value;
    }

}
