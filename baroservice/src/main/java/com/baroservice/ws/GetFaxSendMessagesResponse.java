
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
 *         &lt;element name="GetFaxSendMessagesResult" type="{http://ws.baroservice.com/}ArrayOfFaxMessage" minOccurs="0"/&gt;
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
    "getFaxSendMessagesResult"
})
@XmlRootElement(name = "GetFaxSendMessagesResponse")
public class GetFaxSendMessagesResponse {

    @XmlElement(name = "GetFaxSendMessagesResult")
    protected ArrayOfFaxMessage getFaxSendMessagesResult;

    /**
     * getFaxSendMessagesResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public ArrayOfFaxMessage getGetFaxSendMessagesResult() {
        return getFaxSendMessagesResult;
    }

    /**
     * getFaxSendMessagesResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public void setGetFaxSendMessagesResult(ArrayOfFaxMessage value) {
        this.getFaxSendMessagesResult = value;
    }

}
