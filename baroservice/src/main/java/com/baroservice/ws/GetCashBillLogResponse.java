
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
 *         &lt;element name="GetCashBillLogResult" type="{http://ws.baroservice.com/}ArrayOfCashBillLog" minOccurs="0"/&gt;
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
    "getCashBillLogResult"
})
@XmlRootElement(name = "GetCashBillLogResponse")
public class GetCashBillLogResponse {

    @XmlElement(name = "GetCashBillLogResult")
    protected ArrayOfCashBillLog getCashBillLogResult;

    /**
     * getCashBillLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfCashBillLog }
     *     
     */
    public ArrayOfCashBillLog getGetCashBillLogResult() {
        return getCashBillLogResult;
    }

    /**
     * getCashBillLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfCashBillLog }
     *     
     */
    public void setGetCashBillLogResult(ArrayOfCashBillLog value) {
        this.getCashBillLogResult = value;
    }

}
