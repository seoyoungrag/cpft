
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
 *         &lt;element name="GetTaxInvoiceResult" type="{http://ws.baroservice.com/}TaxInvoice" minOccurs="0"/&gt;
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
    "getTaxInvoiceResult"
})
@XmlRootElement(name = "GetTaxInvoiceResponse")
public class GetTaxInvoiceResponse {

    @XmlElement(name = "GetTaxInvoiceResult")
    protected TaxInvoice getTaxInvoiceResult;

    /**
     * getTaxInvoiceResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link TaxInvoice }
     *     
     */
    public TaxInvoice getGetTaxInvoiceResult() {
        return getTaxInvoiceResult;
    }

    /**
     * getTaxInvoiceResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link TaxInvoice }
     *     
     */
    public void setGetTaxInvoiceResult(TaxInvoice value) {
        this.getTaxInvoiceResult = value;
    }

}
