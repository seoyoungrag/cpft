
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
 *         &lt;element name="GetFaxMessageResult" type="{http://ws.baroservice.com/}FaxMessage" minOccurs="0"/&gt;
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
    "getFaxMessageResult"
})
@XmlRootElement(name = "GetFaxMessageResponse")
public class GetFaxMessageResponse {

    @XmlElement(name = "GetFaxMessageResult")
    protected FaxMessage getFaxMessageResult;

    /**
     * getFaxMessageResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link FaxMessage }
     *     
     */
    public FaxMessage getGetFaxMessageResult() {
        return getFaxMessageResult;
    }

    /**
     * getFaxMessageResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link FaxMessage }
     *     
     */
    public void setGetFaxMessageResult(FaxMessage value) {
        this.getFaxMessageResult = value;
    }

}
