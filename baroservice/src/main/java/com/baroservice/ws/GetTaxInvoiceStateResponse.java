
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
 *         &lt;element name="GetTaxInvoiceStateResult" type="{http://ws.baroservice.com/}TaxInvoiceState" minOccurs="0"/&gt;
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
    "getTaxInvoiceStateResult"
})
@XmlRootElement(name = "GetTaxInvoiceStateResponse")
public class GetTaxInvoiceStateResponse {

    @XmlElement(name = "GetTaxInvoiceStateResult")
    protected TaxInvoiceState getTaxInvoiceStateResult;

    /**
     * getTaxInvoiceStateResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link TaxInvoiceState }
     *     
     */
    public TaxInvoiceState getGetTaxInvoiceStateResult() {
        return getTaxInvoiceStateResult;
    }

    /**
     * getTaxInvoiceStateResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link TaxInvoiceState }
     *     
     */
    public void setGetTaxInvoiceStateResult(TaxInvoiceState value) {
        this.getTaxInvoiceStateResult = value;
    }

}
