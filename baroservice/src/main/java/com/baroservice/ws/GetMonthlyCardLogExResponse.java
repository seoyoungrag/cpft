
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
 *         &lt;element name="GetMonthlyCardLogExResult" type="{http://ws.baroservice.com/}PagedCardLogEx" minOccurs="0"/&gt;
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
    "getMonthlyCardLogExResult"
})
@XmlRootElement(name = "GetMonthlyCardLogExResponse")
public class GetMonthlyCardLogExResponse {

    @XmlElement(name = "GetMonthlyCardLogExResult")
    protected PagedCardLogEx getMonthlyCardLogExResult;

    /**
     * getMonthlyCardLogExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedCardLogEx }
     *     
     */
    public PagedCardLogEx getGetMonthlyCardLogExResult() {
        return getMonthlyCardLogExResult;
    }

    /**
     * getMonthlyCardLogExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedCardLogEx }
     *     
     */
    public void setGetMonthlyCardLogExResult(PagedCardLogEx value) {
        this.getMonthlyCardLogExResult = value;
    }

}
