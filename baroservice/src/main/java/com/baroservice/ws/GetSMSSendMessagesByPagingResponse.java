
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
 *         &lt;element name="GetSMSSendMessagesByPagingResult" type="{http://ws.baroservice.com/}PagedSMSMessages" minOccurs="0"/&gt;
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
    "getSMSSendMessagesByPagingResult"
})
@XmlRootElement(name = "GetSMSSendMessagesByPagingResponse")
public class GetSMSSendMessagesByPagingResponse {

    @XmlElement(name = "GetSMSSendMessagesByPagingResult")
    protected PagedSMSMessages getSMSSendMessagesByPagingResult;

    /**
     * getSMSSendMessagesByPagingResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedSMSMessages }
     *     
     */
    public PagedSMSMessages getGetSMSSendMessagesByPagingResult() {
        return getSMSSendMessagesByPagingResult;
    }

    /**
     * getSMSSendMessagesByPagingResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedSMSMessages }
     *     
     */
    public void setGetSMSSendMessagesByPagingResult(PagedSMSMessages value) {
        this.getSMSSendMessagesByPagingResult = value;
    }

}
