
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
 *         &lt;element name="GetDailyCardLogResult" type="{http://ws.baroservice.com/}PagedCardLog" minOccurs="0"/&gt;
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
    "getDailyCardLogResult"
})
@XmlRootElement(name = "GetDailyCardLogResponse")
public class GetDailyCardLogResponse {

    @XmlElement(name = "GetDailyCardLogResult")
    protected PagedCardLog getDailyCardLogResult;

    /**
     * getDailyCardLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedCardLog }
     *     
     */
    public PagedCardLog getGetDailyCardLogResult() {
        return getDailyCardLogResult;
    }

    /**
     * getDailyCardLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedCardLog }
     *     
     */
    public void setGetDailyCardLogResult(PagedCardLog value) {
        this.getDailyCardLogResult = value;
    }

}
