
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
 *         &lt;element name="GetMonthlyTaxInvoicePurchaseListResult" type="{http://ws.baroservice.com/}PagedTaxInvoiceEx" minOccurs="0"/&gt;
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
    "getMonthlyTaxInvoicePurchaseListResult"
})
@XmlRootElement(name = "GetMonthlyTaxInvoicePurchaseListResponse")
public class GetMonthlyTaxInvoicePurchaseListResponse {

    @XmlElement(name = "GetMonthlyTaxInvoicePurchaseListResult")
    protected PagedTaxInvoiceEx getMonthlyTaxInvoicePurchaseListResult;

    /**
     * getMonthlyTaxInvoicePurchaseListResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public PagedTaxInvoiceEx getGetMonthlyTaxInvoicePurchaseListResult() {
        return getMonthlyTaxInvoicePurchaseListResult;
    }

    /**
     * getMonthlyTaxInvoicePurchaseListResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public void setGetMonthlyTaxInvoicePurchaseListResult(PagedTaxInvoiceEx value) {
        this.getMonthlyTaxInvoicePurchaseListResult = value;
    }

}
