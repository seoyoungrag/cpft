
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
 *         &lt;element name="GetTaxInvoiceLogResult" type="{http://ws.baroservice.com/}ArrayOfInvoiceLog" minOccurs="0"/&gt;
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
    "getTaxInvoiceLogResult"
})
@XmlRootElement(name = "GetTaxInvoiceLogResponse")
public class GetTaxInvoiceLogResponse {

    @XmlElement(name = "GetTaxInvoiceLogResult")
    protected ArrayOfInvoiceLog getTaxInvoiceLogResult;

    /**
     * getTaxInvoiceLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfInvoiceLog }
     *     
     */
    public ArrayOfInvoiceLog getGetTaxInvoiceLogResult() {
        return getTaxInvoiceLogResult;
    }

    /**
     * getTaxInvoiceLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfInvoiceLog }
     *     
     */
    public void setGetTaxInvoiceLogResult(ArrayOfInvoiceLog value) {
        this.getTaxInvoiceLogResult = value;
    }

}
