
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
 *         &lt;element name="GetCashBillStateResult" type="{http://ws.baroservice.com/}CashBillState" minOccurs="0"/&gt;
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
    "getCashBillStateResult"
})
@XmlRootElement(name = "GetCashBillStateResponse")
public class GetCashBillStateResponse {

    @XmlElement(name = "GetCashBillStateResult")
    protected CashBillState getCashBillStateResult;

    /**
     * getCashBillStateResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link CashBillState }
     *     
     */
    public CashBillState getGetCashBillStateResult() {
        return getCashBillStateResult;
    }

    /**
     * getCashBillStateResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link CashBillState }
     *     
     */
    public void setGetCashBillStateResult(CashBillState value) {
        this.getCashBillStateResult = value;
    }

}
