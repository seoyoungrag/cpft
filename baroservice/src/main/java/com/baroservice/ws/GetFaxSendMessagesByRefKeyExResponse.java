
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
 *         &lt;element name="GetFaxSendMessagesByRefKeyExResult" type="{http://ws.baroservice.com/}ArrayOfFaxMessageEx" minOccurs="0"/&gt;
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
    "getFaxSendMessagesByRefKeyExResult"
})
@XmlRootElement(name = "GetFaxSendMessagesByRefKeyExResponse")
public class GetFaxSendMessagesByRefKeyExResponse {

    @XmlElement(name = "GetFaxSendMessagesByRefKeyExResult")
    protected ArrayOfFaxMessageEx getFaxSendMessagesByRefKeyExResult;

    /**
     * getFaxSendMessagesByRefKeyExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfFaxMessageEx }
     *     
     */
    public ArrayOfFaxMessageEx getGetFaxSendMessagesByRefKeyExResult() {
        return getFaxSendMessagesByRefKeyExResult;
    }

    /**
     * getFaxSendMessagesByRefKeyExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfFaxMessageEx }
     *     
     */
    public void setGetFaxSendMessagesByRefKeyExResult(ArrayOfFaxMessageEx value) {
        this.getFaxSendMessagesByRefKeyExResult = value;
    }

}
