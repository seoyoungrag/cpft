
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
 *         &lt;element name="GetTaxInvoiceStateEXResult" type="{http://ws.baroservice.com/}TaxInvoiceStateEX" minOccurs="0"/&gt;
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
    "getTaxInvoiceStateEXResult"
})
@XmlRootElement(name = "GetTaxInvoiceStateEXResponse")
public class GetTaxInvoiceStateEXResponse {

    @XmlElement(name = "GetTaxInvoiceStateEXResult")
    protected TaxInvoiceStateEX getTaxInvoiceStateEXResult;

    /**
     * getTaxInvoiceStateEXResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link TaxInvoiceStateEX }
     *     
     */
    public TaxInvoiceStateEX getGetTaxInvoiceStateEXResult() {
        return getTaxInvoiceStateEXResult;
    }

    /**
     * getTaxInvoiceStateEXResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link TaxInvoiceStateEX }
     *     
     */
    public void setGetTaxInvoiceStateEXResult(TaxInvoiceStateEX value) {
        this.getTaxInvoiceStateEXResult = value;
    }

}
