
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
 *         &lt;element name="SendFaxesFromFTPExResult" type="{http://ws.baroservice.com/}ArrayOfString" minOccurs="0"/&gt;
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
    "sendFaxesFromFTPExResult"
})
@XmlRootElement(name = "SendFaxesFromFTPExResponse")
public class SendFaxesFromFTPExResponse {

    @XmlElement(name = "SendFaxesFromFTPExResult")
    protected ArrayOfString sendFaxesFromFTPExResult;

    /**
     * sendFaxesFromFTPExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString }
     *     
     */
    public ArrayOfString getSendFaxesFromFTPExResult() {
        return sendFaxesFromFTPExResult;
    }

    /**
     * sendFaxesFromFTPExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString }
     *     
     */
    public void setSendFaxesFromFTPExResult(ArrayOfString value) {
        this.sendFaxesFromFTPExResult = value;
    }

}
