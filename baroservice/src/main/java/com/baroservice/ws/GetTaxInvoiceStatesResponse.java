
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
 *         &lt;element name="GetTaxInvoiceStatesResult" type="{http://ws.baroservice.com/}ArrayOfTaxInvoiceState" minOccurs="0"/&gt;
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
    "getTaxInvoiceStatesResult"
})
@XmlRootElement(name = "GetTaxInvoiceStatesResponse")
public class GetTaxInvoiceStatesResponse {

    @XmlElement(name = "GetTaxInvoiceStatesResult")
    protected ArrayOfTaxInvoiceState getTaxInvoiceStatesResult;

    /**
     * getTaxInvoiceStatesResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfTaxInvoiceState }
     *     
     */
    public ArrayOfTaxInvoiceState getGetTaxInvoiceStatesResult() {
        return getTaxInvoiceStatesResult;
    }

    /**
     * getTaxInvoiceStatesResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfTaxInvoiceState }
     *     
     */
    public void setGetTaxInvoiceStatesResult(ArrayOfTaxInvoiceState value) {
        this.getTaxInvoiceStatesResult = value;
    }

}
