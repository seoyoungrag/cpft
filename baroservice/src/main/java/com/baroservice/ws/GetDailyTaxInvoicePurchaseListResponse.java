
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
 *         &lt;element name="GetDailyTaxInvoicePurchaseListResult" type="{http://ws.baroservice.com/}PagedTaxInvoiceEx" minOccurs="0"/&gt;
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
    "getDailyTaxInvoicePurchaseListResult"
})
@XmlRootElement(name = "GetDailyTaxInvoicePurchaseListResponse")
public class GetDailyTaxInvoicePurchaseListResponse {

    @XmlElement(name = "GetDailyTaxInvoicePurchaseListResult")
    protected PagedTaxInvoiceEx getDailyTaxInvoicePurchaseListResult;

    /**
     * getDailyTaxInvoicePurchaseListResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public PagedTaxInvoiceEx getGetDailyTaxInvoicePurchaseListResult() {
        return getDailyTaxInvoicePurchaseListResult;
    }

    /**
     * getDailyTaxInvoicePurchaseListResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedTaxInvoiceEx }
     *     
     */
    public void setGetDailyTaxInvoicePurchaseListResult(PagedTaxInvoiceEx value) {
        this.getDailyTaxInvoicePurchaseListResult = value;
    }

}
