
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
 *         &lt;element name="GetFaxSendMessagesByPagingResult" type="{http://ws.baroservice.com/}PagedFaxMessages" minOccurs="0"/&gt;
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
    "getFaxSendMessagesByPagingResult"
})
@XmlRootElement(name = "GetFaxSendMessagesByPagingResponse")
public class GetFaxSendMessagesByPagingResponse {

    @XmlElement(name = "GetFaxSendMessagesByPagingResult")
    protected PagedFaxMessages getFaxSendMessagesByPagingResult;

    /**
     * getFaxSendMessagesByPagingResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedFaxMessages }
     *     
     */
    public PagedFaxMessages getGetFaxSendMessagesByPagingResult() {
        return getFaxSendMessagesByPagingResult;
    }

    /**
     * getFaxSendMessagesByPagingResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedFaxMessages }
     *     
     */
    public void setGetFaxSendMessagesByPagingResult(PagedFaxMessages value) {
        this.getFaxSendMessagesByPagingResult = value;
    }

}
