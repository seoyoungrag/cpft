
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
 *         &lt;element name="IssueTaxInvoiceExResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
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
    "issueTaxInvoiceExResult"
})
@XmlRootElement(name = "IssueTaxInvoiceExResponse")
public class IssueTaxInvoiceExResponse {

    @XmlElement(name = "IssueTaxInvoiceExResult")
    protected int issueTaxInvoiceExResult;

    /**
     * issueTaxInvoiceExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getIssueTaxInvoiceExResult() {
        return issueTaxInvoiceExResult;
    }

    /**
     * issueTaxInvoiceExResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setIssueTaxInvoiceExResult(int value) {
        this.issueTaxInvoiceExResult = value;
    }

}
