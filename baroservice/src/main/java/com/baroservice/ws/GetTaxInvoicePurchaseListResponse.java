
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
 *         &lt;element name="GetTaxInvoicePurchaseListResult" type="{http://ws.baroservice.com/}PagedTaxInvoice" minOccurs="0"/&gt;
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
    "getTaxInvoicePurchaseListResult"
})
@XmlRootElement(name = "GetTaxInvoicePurchaseListResponse")
public class GetTaxInvoicePurchaseListResponse {

    @XmlElement(name = "GetTaxInvoicePurchaseListResult")
    protected PagedTaxInvoice getTaxInvoicePurchaseListResult;

    /**
     * getTaxInvoicePurchaseListResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedTaxInvoice }
     *     
     */
    public PagedTaxInvoice getGetTaxInvoicePurchaseListResult() {
        return getTaxInvoicePurchaseListResult;
    }

    /**
     * getTaxInvoicePurchaseListResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedTaxInvoice }
     *     
     */
    public void setGetTaxInvoicePurchaseListResult(PagedTaxInvoice value) {
        this.getTaxInvoicePurchaseListResult = value;
    }

}
