
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
 *         &lt;element name="GetFaxSendMessagesByRefKeyResult" type="{http://ws.baroservice.com/}ArrayOfFaxMessage" minOccurs="0"/&gt;
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
    "getFaxSendMessagesByRefKeyResult"
})
@XmlRootElement(name = "GetFaxSendMessagesByRefKeyResponse")
public class GetFaxSendMessagesByRefKeyResponse {

    @XmlElement(name = "GetFaxSendMessagesByRefKeyResult")
    protected ArrayOfFaxMessage getFaxSendMessagesByRefKeyResult;

    /**
     * getFaxSendMessagesByRefKeyResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public ArrayOfFaxMessage getGetFaxSendMessagesByRefKeyResult() {
        return getFaxSendMessagesByRefKeyResult;
    }

    /**
     * getFaxSendMessagesByRefKeyResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public void setGetFaxSendMessagesByRefKeyResult(ArrayOfFaxMessage value) {
        this.getFaxSendMessagesByRefKeyResult = value;
    }

}
