
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
 *         &lt;element name="GetDailyCashBillSalesListResult" type="{http://ws.baroservice.com/}PagedCashBill" minOccurs="0"/&gt;
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
    "getDailyCashBillSalesListResult"
})
@XmlRootElement(name = "GetDailyCashBillSalesListResponse")
public class GetDailyCashBillSalesListResponse {

    @XmlElement(name = "GetDailyCashBillSalesListResult")
    protected PagedCashBill getDailyCashBillSalesListResult;

    /**
     * getDailyCashBillSalesListResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedCashBill }
     *     
     */
    public PagedCashBill getGetDailyCashBillSalesListResult() {
        return getDailyCashBillSalesListResult;
    }

    /**
     * getDailyCashBillSalesListResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedCashBill }
     *     
     */
    public void setGetDailyCashBillSalesListResult(PagedCashBill value) {
        this.getDailyCashBillSalesListResult = value;
    }

}
