
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
 *         &lt;element name="GetFaxSendMessagesExResult" type="{http://ws.baroservice.com/}ArrayOfFaxMessageEx" minOccurs="0"/&gt;
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
    "getFaxSendMessagesExResult"
})
@XmlRootElement(name = "GetFaxSendMessagesExResponse")
public class GetFaxSendMessagesExResponse {

    @XmlElement(name = "GetFaxSendMessagesExResult")
    protected ArrayOfFaxMessageEx getFaxSendMessagesExResult;

    /**
     * getFaxSendMessagesExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfFaxMessageEx }
     *     
     */
    public ArrayOfFaxMessageEx getGetFaxSendMessagesExResult() {
        return getFaxSendMessagesExResult;
    }

    /**
     * getFaxSendMessagesExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfFaxMessageEx }
     *     
     */
    public void setGetFaxSendMessagesExResult(ArrayOfFaxMessageEx value) {
        this.getFaxSendMessagesExResult = value;
    }

}
