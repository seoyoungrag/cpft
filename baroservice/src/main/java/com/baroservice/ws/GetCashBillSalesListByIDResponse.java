
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
 *         &lt;element name="GetCashBillSalesListByIDResult" type="{http://ws.baroservice.com/}PagedCashBill" minOccurs="0"/&gt;
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
    "getCashBillSalesListByIDResult"
})
@XmlRootElement(name = "GetCashBillSalesListByIDResponse")
public class GetCashBillSalesListByIDResponse {

    @XmlElement(name = "GetCashBillSalesListByIDResult")
    protected PagedCashBill getCashBillSalesListByIDResult;

    /**
     * getCashBillSalesListByIDResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedCashBill }
     *     
     */
    public PagedCashBill getGetCashBillSalesListByIDResult() {
        return getCashBillSalesListByIDResult;
    }

    /**
     * getCashBillSalesListByIDResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedCashBill }
     *     
     */
    public void setGetCashBillSalesListByIDResult(PagedCashBill value) {
        this.getCashBillSalesListByIDResult = value;
    }

}
