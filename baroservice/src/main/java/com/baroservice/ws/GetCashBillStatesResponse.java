
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
 *         &lt;element name="GetCashBillStatesResult" type="{http://ws.baroservice.com/}ArrayOfCashBillState" minOccurs="0"/&gt;
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
    "getCashBillStatesResult"
})
@XmlRootElement(name = "GetCashBillStatesResponse")
public class GetCashBillStatesResponse {

    @XmlElement(name = "GetCashBillStatesResult")
    protected ArrayOfCashBillState getCashBillStatesResult;

    /**
     * getCashBillStatesResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfCashBillState }
     *     
     */
    public ArrayOfCashBillState getGetCashBillStatesResult() {
        return getCashBillStatesResult;
    }

    /**
     * getCashBillStatesResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfCashBillState }
     *     
     */
    public void setGetCashBillStatesResult(ArrayOfCashBillState value) {
        this.getCashBillStatesResult = value;
    }

}
