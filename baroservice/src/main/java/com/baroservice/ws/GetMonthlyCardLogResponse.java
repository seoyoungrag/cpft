
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
 *         &lt;element name="GetMonthlyCardLogResult" type="{http://ws.baroservice.com/}PagedCardLog" minOccurs="0"/&gt;
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
    "getMonthlyCardLogResult"
})
@XmlRootElement(name = "GetMonthlyCardLogResponse")
public class GetMonthlyCardLogResponse {

    @XmlElement(name = "GetMonthlyCardLogResult")
    protected PagedCardLog getMonthlyCardLogResult;

    /**
     * getMonthlyCardLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedCardLog }
     *     
     */
    public PagedCardLog getGetMonthlyCardLogResult() {
        return getMonthlyCardLogResult;
    }

    /**
     * getMonthlyCardLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedCardLog }
     *     
     */
    public void setGetMonthlyCardLogResult(PagedCardLog value) {
        this.getMonthlyCardLogResult = value;
    }

}
